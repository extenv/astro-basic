function Content() {
    return (
        <>
            <div class="w-full mt-10 flex justify-center items-center flex-col px-5 space-y-5">
                <form action="" class="space-y-5 w-full sm:w-2/6 border p-5 rounded-md bg-white dark:text-black">
                    <div class="flex flex-col ">
                        <h1>Title</h1>
                        <input type="text" class="p-3 border rounded-md" />
                    </div>
                    <div class="flex flex-col ">
                        <h1>Message : </h1>
                        <textarea class="py-2 h-52 px-3 border rounded-md" />
                    </div>
                    <button class="py-2 px-5 rounded-md bg-blue-500 text-white hover:scale-95">
                        Submit
                    </button>
                </form>
                <div class="flex justify-center items-center flex-col w-full sm:w-2/6 space-y-5">
                    <span>From Database</span>
                    <div class="dark:bg-white dark:text-black border dark:border-0 w-full py-3 rounded-md px-2 flex justify-between items-center">
                        <div>
                            <h1>Title</h1>
                            <span>Messages</span>
                        </div>
                        <div class="space-x-5">
                            <button class="py-2 px-5 rounded-md bg-blue-900 text-white hover:scale-95">Edit</button>
                            <button class="py-2 px-5 rounded-md bg-red-500 text-white hover:scale-95">Delete</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
export default Content;