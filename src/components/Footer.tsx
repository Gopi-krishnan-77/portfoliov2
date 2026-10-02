export default function Footer() {
  return (
    <footer className="bg-dark py-8">
      <div className="mx-auto max-w-[1280px] px-[clamp(20px,5vw,32px)] text-center">
        <p className="text-subtle text-sm">
          Made in Kerala 🌴 · © {new Date().getFullYear()} Gopikrishnan Balagopal
        </p>
      </div>
    </footer>
  )
}
