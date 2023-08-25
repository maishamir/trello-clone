import Image from "next/image"

function Header() {
  return (
    <header>
      <Image src="https://links.papareact.com/c2cdd5"
        alt="Trello logo"
        width={300}
        height={100}

        // width is 44 on mobile view; medium view is 56 padding bottom = 10, med: padding bottom = 0 object contain
        className="w-44 md:w-56 pb-10 md:pb-0 object-contain" 
      />

      <div>
        {/* search box */}
        <form>
          <input type="text" />
          <button hidden></button>
        </form>

        {/* avatar */}
      </div>
    </header>
  )
}

export default Header