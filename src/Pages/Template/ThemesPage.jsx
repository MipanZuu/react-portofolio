import React from "react";
import Sidebar from "../../Components/Sidebar";
import Themes from "../../Components/Template/Themes";

function ThemesPage() {
    return (
        <Sidebar>
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 overflow-x-auto">
                <Themes />
            </div>
        </Sidebar>
    );
}

export default ThemesPage;
