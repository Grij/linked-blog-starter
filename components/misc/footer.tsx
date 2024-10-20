import PreviewLink from "./preview-link"

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <div className="container mx-auto px-5">
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            <PreviewLink href="#">Вино — це рідина,</PreviewLink> яка розплутує думки.
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="/home"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Підписатися
            </a>
            <a
              href={`https://obsidian.md`}
              className="mx-3 font-bold hover:underline"
            >
              Халтура 100грн
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
