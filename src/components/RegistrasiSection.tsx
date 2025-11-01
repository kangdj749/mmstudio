"use client"

import { useState, Suspense } from "react"
import { useForm, SubmitHandler, UseFormRegisterReturn } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2, Mic2 } from "lucide-react"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

// ====== Schema Validasi ======
const formSchema = z.object({
  nama: z.string().min(2, "Nama minimal 2 karakter"),
  email: z.string().email("Format email tidak valid"),
  nohp: z.string().min(8, "Nomor HP terlalu pendek"),
  layanan: z.enum([
    "Recording",
    "Mixing & Mastering",
    "Pembuatan Lagu",
    "Video Clip",
    "Music Scoring",
    "Kelas Vocal / Music Direction",
  ]),
  jadwal: z.string().min(1, "Pilih jadwal sesi rekaman"),
  metodePembayaran: z.string().min(1, "Wajib pilih metode pembayaran"),
  catatan: z.string().optional(),
})

type FormValues = z.infer<typeof formSchema>

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyqSHEOSQE8wljDztjaJCchmLhFesOJy4igROhMo5a890TcrzIvltHqs_KjPBi6les/exec" // ganti dengan script kamu

export default function BookingStudioWrapper() {
  return (
    <Suspense fallback={<div className="text-center py-20 text-gray-400">Loading form...</div>}>
      <BookingStudioSection />
    </Suspense>
  )
}

function BookingStudioSection() {
  const router = useRouter()
  const [submitting, setSubmitting] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
  })

  const handleSubmitForm: SubmitHandler<FormValues> = async (data) => {
    if (submitting) return
    setSubmitting(true)

    try {
      const res = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as any),
      })
      if (!res.ok) throw new Error("Gagal simpan data")

      toast.success("Booking berhasil 🎧", {
        description: "Tim MM Studio akan segera menghubungi via WhatsApp.",
      })

      setTimeout(() => {
        const query = new URLSearchParams(data as any).toString()
        router.push(`/thank-you?${query}`)
      }, 1200)
    } catch (err) {
      toast.error("Terjadi kesalahan ❌", {
        description: "Coba kirim ulang form-nya ya.",
      })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section
      id="booking"
      className="py-20 px-4 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 text-white"
    >
      <div className="w-full max-w-md mx-auto">
        <div className="bg-neutral-900/70 backdrop-blur-xl border border-red-500/30 rounded-2xl shadow-lg p-6 md:p-10">
          <div className="flex flex-col items-center mb-6">
            <div className="bg-red-600/20 p-3 rounded-full mb-3">
              <Mic2 className="h-6 w-6 text-red-400" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-red-400 text-center">
              Booking Sesi Studio Musik
            </h2>
            <p className="text-sm text-gray-400 text-center mt-2">
              Lengkapi data di bawah ini untuk memulai perjalanan musikmu di MM Studio 🎶
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSubmitForm)} className="mt-6 space-y-6">
            <FormInput
              label="Nama Lengkap"
              register={register("nama")}
              error={errors.nama?.message}
              placeholder="cth: Andi Pratama"
            />
            <FormInput
              label="Email"
              type="email"
              register={register("email")}
              error={errors.email?.message}
              placeholder="cth: email@gmail.com"
            />
            <FormInput
              label="No HP / WhatsApp"
              register={register("nohp")}
              error={errors.nohp?.message}
              placeholder="cth: 08123456789"
            />
            <FormSelect
              label="Layanan Studio"
              register={register("layanan")}
              error={errors.layanan?.message}
              options={[
                "Recording",
                "Mixing & Mastering",
                "Pembuatan Lagu",
                "Video Clip",
                "Music Scoring",
                "Kelas Vocal / Music Direction",
              ]}
            />
            <FormInput
              label="Jadwal / Tanggal Rekaman"
              type="date"
              register={register("jadwal")}
              error={errors.jadwal?.message}
            />
            <FormSelect
              label="Metode Pembayaran"
              register={register("metodePembayaran")}
              error={errors.metodePembayaran?.message}
              options={["Transfer Bank", "E-Wallet", "Cash di Studio"]}
            />
            <FormTextarea
              label="Catatan Tambahan (opsional)"
              register={register("catatan")}
              placeholder="cth: Ingin rekam lagu pop akustik dengan suasana intimate"
            />

            <button
              type="submit"
              disabled={submitting}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-red-500 text-black font-semibold py-3 hover:bg-red-400 transition shadow-[0_0_20px_-5px_#34d39980] disabled:opacity-60"
            >
              {submitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" /> Mengirim...
                </>
              ) : (
                <>
                  <Mic2 className="h-5 w-5" /> Book Session Sekarang
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

// ====== Helper Components ======
interface FormInputProps {
  label: string
  register: UseFormRegisterReturn
  error?: string
  type?: string
  placeholder?: string
}

function FormInput({
  label,
  register,
  error,
  type = "text",
  placeholder,
}: FormInputProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-1">{label}</label>
      <input
        type={type}
        {...register}
        placeholder={placeholder}
        className="w-full rounded-xl border border-neutral-700 bg-neutral-800 text-white px-4 py-2.5 outline-none focus:ring-2 focus:ring-red-400 placeholder-gray-500"
      />
      {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
    </div>
  )
}

interface FormSelectProps {
  label: string
  register: UseFormRegisterReturn
  error?: string
  options: string[]
}

function FormSelect({ label, register, error, options }: FormSelectProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-1">{label}</label>
      <select
        {...register}
        className="w-full rounded-xl border border-neutral-700 bg-neutral-800 text-white px-4 py-2.5 outline-none focus:ring-2 focus:ring-red-400"
      >
        <option value="">-- Pilih {label} --</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
    </div>
  )
}

interface FormTextareaProps {
  label: string
  register: UseFormRegisterReturn
  placeholder?: string
}

function FormTextarea({ label, register, placeholder }: FormTextareaProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-1">{label}</label>
      <textarea
        {...register}
        placeholder={placeholder}
        className="w-full rounded-xl border border-neutral-700 bg-neutral-800 text-white px-4 py-2.5 outline-none focus:ring-2 focus:ring-red-400 min-h-[100px] placeholder-gray-500"
      />
    </div>
  )
}
