import { verifySession } from "../lib/dal"

export default function Profile() {
    verifySession()
    
    return (
        <div className="container mx-auto">
            <h1>This is profile</h1>
        </div>
    )
}