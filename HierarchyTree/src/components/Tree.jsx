
const Tree = ({ TreeData }) => {
    return (
        <ul style={{ paddingLeft: 0 }}>
            <li className="parent_li ">
                <span style={{ fontSize: "17px" }} className="ng-binding">
                    {TreeData?.name}
                </span>
                {
                    TreeData?.chieldDesignation?.map((res) => {
                        return (
                            <ul style={{ paddingLeft: 0 }} key={res.id}>
                                <li className="parent_li">
                                    <span style={{ fontSize: "17px" }} className="ng-binding">
                                        {res?.chieldName}
                                    </span>

                                </li>
                            </ul>
                        )
                    })

                }
            </li>
        </ul>
    )
}

export default Tree