function ContactForm () {
    return (
        <form>
            <div className="grid text-[#EEE] px-2">
                <div className="col-12 flex flex-col">
                    <label>Nombres</label>
                    <div>
                        <input
                            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            type="text"
                            placeholder="Jorge Ruiz" />
                    </div>
                </div>
            </div>
            <input type="email" placeholder="joruiz@developercode.dev" />
            <textarea placeholder="Mensaje" />
        </form>
    )
}

export default ContactForm
