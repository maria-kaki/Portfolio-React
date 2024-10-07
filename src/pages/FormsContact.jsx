import { useState } from "react"

export default function FormsContact() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Olá, ${name}! Sua mensagem: "${message}" foi enviada, Fique atento ao seu e-mail: "${email}", você receberá a resposta! Obrigada!`)

        setName('')
        setEmail('')
        setMessage('')
    }

    return (
        <div className="flex justify-center bg-black text-blue-600 p-20">
            <form onSubmit={handleSubmit} className="flex flex-col w-2/4">
                <label htmlFor="name">Nome:</label>
                <input type="text" id="name" className="bg-blue-950 text-blue-200 rounded-md" value={name} onChange={e => setName(e.target.value)}/>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" className="bg-blue-950 text-blue-200 rounded-md" value={email} onChange={e => setEmail(e.target.value)}/>
                <label htmlFor="message">Mensagem:</label>
                <textarea id="message" cols="20" rows="5" className="bg-blue-950 text-blue-200 rounded-md" value={message} onChange={e => setMessage(e.target.value)}
                >
                </textarea>
                <button type="submit" className="bg-blue-800 mt-5 text-white p-2 rounded-lg">Enviar</button>
            </form>
        </div>
    )
}