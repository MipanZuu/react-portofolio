// Template.jsx
import React from "react";
import Sidebar from "../../Components/Sidebar";
import TemplateStarting from "../../Components/Template/TemplateStarting";

function Template() {
    return (
        <Sidebar>
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                <TemplateStarting />
            </div>
        </Sidebar>
    );
}

export default Template;
