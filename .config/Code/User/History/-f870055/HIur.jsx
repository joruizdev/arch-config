function ContactForm () {
    return (
        <form>
            <div className="grid">
                <div className="col-6">
                    <input type="text" placeholder="Jorge Ruiz" />
                </div>
            </div>
            <input type="text" placeholder="Jorge Ruiz" />
            <input type="email" placeholder="joruiz@developercode.dev" />
            <textarea placeholder="Mensaje" />
        </form>
    )
}

export default ContactForm
