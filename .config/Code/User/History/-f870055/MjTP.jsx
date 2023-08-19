function ContactForm () {
    return (
        <form>
            <div className="grid">
                <div className="col-12 flex flex-col">
                    <label>Nombres</label>
                    <div>
                        <input type="text" placeholder="Jorge Ruiz" />
                    </div>
                </div>
            </div>
            <input type="email" placeholder="joruiz@developercode.dev" />
            <textarea placeholder="Mensaje" />
        </form>
    )
}

export default ContactForm
