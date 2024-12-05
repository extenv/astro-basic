import { createSignal, createEffect } from "solid-js";

function Head() {

    const [isDarkMode, setIsDarkMode] = createSignal(false);

    const toggleMode = () => {
        if (isDarkMode()) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDarkMode(true);
        }
    };

    createEffect(() => {
        if (localStorage.getItem('theme') === 'dark') {
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove('dark');
            setIsDarkMode(false);
        }
    });

    return (
        <>
            <header class="flex justify-between items-center w-full py-5 px-10 shadow dark:bg-gray-900">
                <div>
                    BRAND
                </div>
                <div class="space-x-5">
                    <button
                        onclick={toggleMode}
                        type="button"
                        class="px-4 py-2 bg-blue-500 text-white rounded-md hover:scale-95"
                    >
                        {isDarkMode() ? "Dark" : "Light"}
                    </button>
                    <button type="button" class="px-4 py-2 bg-blue-500 text-white rounded-md hover:scale-95">
                        Login
                    </button>
                </div>
            </header>
        </>
    );
}

export default Head;
