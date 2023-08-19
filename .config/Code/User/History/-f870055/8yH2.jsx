function ContactForm () {
    return (
        <form>
            <div className="grid text-[#EEE] px-2">
                <div className="col-12 flex flex-col">
                    <label>Nombres</label>
                    <div>
                        <input
                            class="bg-gray-200 border-2 appearance-none rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-2 focus:border-cyan-500"
                            type="text"
                            placeholder="Jorge Ruiz" />
                    </div>
                </div>

                <div className="col-12 flex flex-col">
                    <label>Nombres</label>
                    <div>
                        <input
                            class="bg-gray-200 border-2 appearance-none rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-2 focus:border-cyan-500"
                            type="email"
                            placeholder="joruiz@developercode.dev" />
                    </div>
                </div>
            </div>
            <textarea placeholder="Mensaje" />
        </form>
    )
}

export default ContactForm
