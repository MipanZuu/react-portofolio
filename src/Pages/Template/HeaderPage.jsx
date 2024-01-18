import React from "react";
import Sidebar from "../../Components/Sidebar";
import HeaderTemp from "../../Components/Template/HeaderTemp";

function HeaderPage() {
    return (
        <Sidebar>
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 overflow-x-auto">
                <HeaderTemp />
            </div>
        </Sidebar>
    );
}

export default HeaderPage;
