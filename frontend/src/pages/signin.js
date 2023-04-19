import Link from 'next/link';

function handleClick() {
   
}

export default function SignIn() {
    return (
    <div class="flex h-screen bg-sky bg-cover">
        <div className="flex flex-col content-center items-center justify-center w-3/12 h-3/4 rounded-lg bg-indigo flex font-philo m-auto p-10">
            <div className="text-6xl text-yellow justify-center content-center">Sign in to Permi</div>
            <button className="rounded-lg bg-yellow flex flex-row w-fit p-5 m-20">
                <text className="text-3xl text-black pr-10">Authenticate with</text>
                <img className="w-20" src="/microsoft.svg"></img>
            </button>
        </div>
    </div> 
    )
}