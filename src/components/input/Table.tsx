import React, { useState } from "react";

const Table = () => {
    const [data, setData] = useState<any>({
        text1: `Lorem Ipsum is simply dummy text of the printing andtypesettingindustry.LoremIpsum has been the industry's standard dummy text ever since the1500s,whenanunknownprintertookagalleyoftypeandscrambleditto make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        text2: `Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the1500s`
    });
    return (
        <div className="table-responsive-md">
            <table className="table table-bordered ">
                <thead className="table-dark">
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="w-50"><span>{data.text1}</span></td>
                        <td className="w-50"><span>{data.text2}</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Table;