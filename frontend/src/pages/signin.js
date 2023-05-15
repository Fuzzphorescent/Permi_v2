import Link from 'next/link';

function handleClick() {
   
}

export default function SignIn() {
    return (
    <div class="flex h-screen bg-sky bg-cover">
        <div className="flex flex-col content-center items-center justify-center w-3/12 h-1/2 rounded-lg bg-indigo flex font-philo m-auto p-10">
            <div className="text-4xl text-yellow justify-center content-center">Sign in to Permi</div>
            <button className="rounded-lg mt-10 flex flex-row w-fit">
                {/* <text className="text-3xl text-black pr-10">Authenticate with</text>
                <img className="w-20" src="/microsoft.svg"></img> */}
                <img src="/ms-signin.svg" />
            </button>
        </div>
    </div> 
    )
}