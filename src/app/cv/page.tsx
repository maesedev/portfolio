import { FolderArrowDownIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid"

export default function CVPage() {
    return (

        <section className=" sky pt-32 bg-gradient-to-b from-black to-indigo-950 text-white pb-11 ">
            <div className="flex gap-7 justify-center my-5">
                <a href="/assets/CV.pdf" download>
                    <span className="text-xl inline-flex  gap-2 items-center rounded-md bg-blue-50 px-2 py-1 font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                        download
                        <FolderArrowDownIcon width={20} height={20} className="text-blue-700" />
                    </span>
                </a>

                <a href="/assets/CV.pdf" target="blank">

                    <span className="text-xl inline-flex  gap-2 items-center rounded-md bg-blue-50 px-2 py-1 font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                        Open on full screen
                        <ArrowTopRightOnSquareIcon width={20} height={20} className="text-blue-700" />
                    </span>

                </a>
            </div>

            <embed className="w-11/12 mx-auto    h-screen" src="/assets/CV.pdf" type="" />
        </section>

    )
}