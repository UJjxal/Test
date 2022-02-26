import React, { useMemo } from 'react';
import { useNavigate } from "react-router";
import HeaderDashboard from '../Components/HeaderDashboard';
import Footer from '../Components/Footer1';
import $ from 'jquery'
import { useTable, usePagination } from 'react-table'

export default function Dashboard() {

    const COLUMNS = [
        {
            Header: 'Name',
            Footer: 'name',
            accessor: 'name',
            disableFilters: true,
            sticky: 'left'
        },
        {
            Header: 'SAP ID',
            Footer: 'sapId',
            accessor: 'sapId',
            sticky: 'left'
        },
        {
            Header: 'Project Hours',
            Footer: 'projectHours',
            accessor: 'projectHours',
            sticky: 'left'
        },
        {
            Header: 'Holidays / Leave Hours',
            Footer: 'leaveHours',
            accessor: 'leaveHours',

        },
        {
            Header: 'Afternoon Shift Days',
            Footer: 'afternoonShiftDays',
            accessor: 'afternoonShiftDays'
        },
        {
            Header: 'Night Shift Days',
            Footer: 'nightShiftDays',
            accessor: 'nightShiftDays'
        },
        {
            Header: 'Days Eligible for TA',
            Footer: 'daysEligibleTA',
            accessor: 'daysEligibleTA'
        },
        {
            Header: 'Transport Allowance',
            Footer: 'transportAllowance',
            accessor: 'transportAllowance'
        },
        {
            Header: 'Total Allowance',
            Footer: 'totalAllowance',
            accessor: 'totalAllowance'
        },
    ]

    const DATA = [
        {
            "name": "Fred",
            "sapId": "4676",
            "projectHours": "58",
            "leaveHours": "6",
            "afternoonShiftDays": "19",
            "nightShiftDays": "5",
            "daysEligibleTA": "6",
            "transportAllowance": "1569",
            "totalAllowance": "5268"
        },
        {
            "name": "Noelle",
            "sapId": "2455",
            "projectHours": "10",
            "leaveHours": "4",
            "afternoonShiftDays": "8",
            "nightShiftDays": "8",
            "daysEligibleTA": "11",
            "transportAllowance": "7340",
            "totalAllowance": "446"
        },
        {
            "name": "Mathilda",
            "sapId": "1291",
            "projectHours": "68",
            "leaveHours": "19",
            "afternoonShiftDays": "5",
            "nightShiftDays": "6",
            "daysEligibleTA": "14",
            "transportAllowance": "7443",
            "totalAllowance": "734"
        },
        {
            "name": "Gaylene",
            "sapId": "5890",
            "projectHours": "2",
            "leaveHours": "20",
            "afternoonShiftDays": "15",
            "nightShiftDays": "8",
            "daysEligibleTA": "17",
            "transportAllowance": "606",
            "totalAllowance": "1882"
        },
        {
            "name": "Catrina",
            "sapId": "5373",
            "projectHours": "49",
            "leaveHours": "15",
            "afternoonShiftDays": "20",
            "nightShiftDays": "13",
            "daysEligibleTA": "6",
            "transportAllowance": "3802",
            "totalAllowance": "976"
        },
        {
            "name": "Tersina",
            "sapId": "5638",
            "projectHours": "16",
            "leaveHours": "5",
            "afternoonShiftDays": "18",
            "nightShiftDays": "4",
            "daysEligibleTA": "15",
            "transportAllowance": "4065",
            "totalAllowance": "5637"
        },
        {
            "name": "Elyssa",
            "sapId": "4064",
            "projectHours": "30",
            "leaveHours": "10",
            "afternoonShiftDays": "10",
            "nightShiftDays": "4",
            "daysEligibleTA": "14",
            "transportAllowance": "4193",
            "totalAllowance": "6884"
        },
        {
            "name": "Gabi",
            "sapId": "1691",
            "projectHours": "13",
            "leaveHours": "1",
            "afternoonShiftDays": "6",
            "nightShiftDays": "20",
            "daysEligibleTA": "12",
            "transportAllowance": "1496",
            "totalAllowance": "9552"
        },
        {
            "name": "Kalina",
            "sapId": "9533",
            "projectHours": "87",
            "leaveHours": "8",
            "afternoonShiftDays": "18",
            "nightShiftDays": "10",
            "daysEligibleTA": "9",
            "transportAllowance": "3758",
            "totalAllowance": "2094"
        },
        {
            "name": "Valli",
            "sapId": "102",
            "projectHours": "57",
            "leaveHours": "10",
            "afternoonShiftDays": "10",
            "nightShiftDays": "17",
            "daysEligibleTA": "12",
            "transportAllowance": "7197",
            "totalAllowance": "5416"
        },
        {
            "name": "Shandie",
            "sapId": "8295",
            "projectHours": "19",
            "leaveHours": "3",
            "afternoonShiftDays": "1",
            "nightShiftDays": "12",
            "daysEligibleTA": "3",
            "transportAllowance": "3641",
            "totalAllowance": "7055"
        },
        {
            "name": "Pamella",
            "sapId": "5625",
            "projectHours": "80",
            "leaveHours": "14",
            "afternoonShiftDays": "16",
            "nightShiftDays": "15",
            "daysEligibleTA": "3",
            "transportAllowance": "9633",
            "totalAllowance": "7305"
        },
        {
            "name": "Daryl",
            "sapId": "2044",
            "projectHours": "42",
            "leaveHours": "1",
            "afternoonShiftDays": "11",
            "nightShiftDays": "18",
            "daysEligibleTA": "3",
            "transportAllowance": "3955",
            "totalAllowance": "7088"
        },
        {
            "name": "Fred",
            "sapId": "4676",
            "projectHours": "58",
            "leaveHours": "6",
            "afternoonShiftDays": "19",
            "nightShiftDays": "5",
            "daysEligibleTA": "6",
            "transportAllowance": "1569",
            "totalAllowance": "5268"
        },
        {
            "name": "Noelle",
            "sapId": "2455",
            "projectHours": "10",
            "leaveHours": "4",
            "afternoonShiftDays": "8",
            "nightShiftDays": "8",
            "daysEligibleTA": "11",
            "transportAllowance": "7340",
            "totalAllowance": "446"
        },
        {
            "name": "Mathilda",
            "sapId": "1291",
            "projectHours": "68",
            "leaveHours": "19",
            "afternoonShiftDays": "5",
            "nightShiftDays": "6",
            "daysEligibleTA": "14",
            "transportAllowance": "7443",
            "totalAllowance": "734"
        },
        {
            "name": "Gaylene",
            "sapId": "5890",
            "projectHours": "2",
            "leaveHours": "20",
            "afternoonShiftDays": "15",
            "nightShiftDays": "8",
            "daysEligibleTA": "17",
            "transportAllowance": "606",
            "totalAllowance": "1882"
        },
        {
            "name": "Catrina",
            "sapId": "5373",
            "projectHours": "49",
            "leaveHours": "15",
            "afternoonShiftDays": "20",
            "nightShiftDays": "13",
            "daysEligibleTA": "6",
            "transportAllowance": "3802",
            "totalAllowance": "976"
        },
        {
            "name": "Tersina",
            "sapId": "5638",
            "projectHours": "16",
            "leaveHours": "5",
            "afternoonShiftDays": "18",
            "nightShiftDays": "4",
            "daysEligibleTA": "15",
            "transportAllowance": "4065",
            "totalAllowance": "5637"
        },
        {
            "name": "Elyssa",
            "sapId": "4064",
            "projectHours": "30",
            "leaveHours": "10",
            "afternoonShiftDays": "10",
            "nightShiftDays": "4",
            "daysEligibleTA": "14",
            "transportAllowance": "4193",
            "totalAllowance": "6884"
        },
        {
            "name": "Gabi",
            "sapId": "1691",
            "projectHours": "13",
            "leaveHours": "1",
            "afternoonShiftDays": "6",
            "nightShiftDays": "20",
            "daysEligibleTA": "12",
            "transportAllowance": "1496",
            "totalAllowance": "9552"
        },
        {
            "name": "Kalina",
            "sapId": "9533",
            "projectHours": "87",
            "leaveHours": "8",
            "afternoonShiftDays": "18",
            "nightShiftDays": "10",
            "daysEligibleTA": "9",
            "transportAllowance": "3758",
            "totalAllowance": "2094"
        },
        {
            "name": "Valli",
            "sapId": "102",
            "projectHours": "57",
            "leaveHours": "10",
            "afternoonShiftDays": "10",
            "nightShiftDays": "17",
            "daysEligibleTA": "12",
            "transportAllowance": "7197",
            "totalAllowance": "5416"
        },
        {
            "name": "Shandie",
            "sapId": "8295",
            "projectHours": "19",
            "leaveHours": "3",
            "afternoonShiftDays": "1",
            "nightShiftDays": "12",
            "daysEligibleTA": "3",
            "transportAllowance": "3641",
            "totalAllowance": "7055"
        },
        {
            "name": "Pamella",
            "sapId": "5625",
            "projectHours": "80",
            "leaveHours": "14",
            "afternoonShiftDays": "16",
            "nightShiftDays": "15",
            "daysEligibleTA": "3",
            "transportAllowance": "9633",
            "totalAllowance": "7305"
        },
        {
            "name": "Daryl",
            "sapId": "2044",
            "projectHours": "42",
            "leaveHours": "1",
            "afternoonShiftDays": "11",
            "nightShiftDays": "18",
            "daysEligibleTA": "3",
            "transportAllowance": "3955",
            "totalAllowance": "7088"
        },
        {
            "name": "Fred",
            "sapId": "4676",
            "projectHours": "58",
            "leaveHours": "6",
            "afternoonShiftDays": "19",
            "nightShiftDays": "5",
            "daysEligibleTA": "6",
            "transportAllowance": "1569",
            "totalAllowance": "5268"
        },
        {
            "name": "Noelle",
            "sapId": "2455",
            "projectHours": "10",
            "leaveHours": "4",
            "afternoonShiftDays": "8",
            "nightShiftDays": "8",
            "daysEligibleTA": "11",
            "transportAllowance": "7340",
            "totalAllowance": "446"
        },
        {
            "name": "Mathilda",
            "sapId": "1291",
            "projectHours": "68",
            "leaveHours": "19",
            "afternoonShiftDays": "5",
            "nightShiftDays": "6",
            "daysEligibleTA": "14",
            "transportAllowance": "7443",
            "totalAllowance": "734"
        },
        {
            "name": "Gaylene",
            "sapId": "5890",
            "projectHours": "2",
            "leaveHours": "20",
            "afternoonShiftDays": "15",
            "nightShiftDays": "8",
            "daysEligibleTA": "17",
            "transportAllowance": "606",
            "totalAllowance": "1882"
        },
        {
            "name": "Catrina",
            "sapId": "5373",
            "projectHours": "49",
            "leaveHours": "15",
            "afternoonShiftDays": "20",
            "nightShiftDays": "13",
            "daysEligibleTA": "6",
            "transportAllowance": "3802",
            "totalAllowance": "976"
        },
        {
            "name": "Tersina",
            "sapId": "5638",
            "projectHours": "16",
            "leaveHours": "5",
            "afternoonShiftDays": "18",
            "nightShiftDays": "4",
            "daysEligibleTA": "15",
            "transportAllowance": "4065",
            "totalAllowance": "5637"
        },
        {
            "name": "Elyssa",
            "sapId": "4064",
            "projectHours": "30",
            "leaveHours": "10",
            "afternoonShiftDays": "10",
            "nightShiftDays": "4",
            "daysEligibleTA": "14",
            "transportAllowance": "4193",
            "totalAllowance": "6884"
        },
        {
            "name": "Gabi",
            "sapId": "1691",
            "projectHours": "13",
            "leaveHours": "1",
            "afternoonShiftDays": "6",
            "nightShiftDays": "20",
            "daysEligibleTA": "12",
            "transportAllowance": "1496",
            "totalAllowance": "9552"
        },
        {
            "name": "Kalina",
            "sapId": "9533",
            "projectHours": "87",
            "leaveHours": "8",
            "afternoonShiftDays": "18",
            "nightShiftDays": "10",
            "daysEligibleTA": "9",
            "transportAllowance": "3758",
            "totalAllowance": "2094"
        },
        {
            "name": "Valli",
            "sapId": "102",
            "projectHours": "57",
            "leaveHours": "10",
            "afternoonShiftDays": "10",
            "nightShiftDays": "17",
            "daysEligibleTA": "12",
            "transportAllowance": "7197",
            "totalAllowance": "5416"
        },
        {
            "name": "Shandie",
            "sapId": "8295",
            "projectHours": "19",
            "leaveHours": "3",
            "afternoonShiftDays": "1",
            "nightShiftDays": "12",
            "daysEligibleTA": "3",
            "transportAllowance": "3641",
            "totalAllowance": "7055"
        },
        {
            "name": "Pamella",
            "sapId": "5625",
            "projectHours": "80",
            "leaveHours": "14",
            "afternoonShiftDays": "16",
            "nightShiftDays": "15",
            "daysEligibleTA": "3",
            "transportAllowance": "9633",
            "totalAllowance": "7305"
        },
        {
            "name": "Daryl",
            "sapId": "2044",
            "projectHours": "42",
            "leaveHours": "1",
            "afternoonShiftDays": "11",
            "nightShiftDays": "18",
            "daysEligibleTA": "3",
            "transportAllowance": "3955",
            "totalAllowance": "7088"
        },
        {
            "name": "Fred",
            "sapId": "4676",
            "projectHours": "58",
            "leaveHours": "6",
            "afternoonShiftDays": "19",
            "nightShiftDays": "5",
            "daysEligibleTA": "6",
            "transportAllowance": "1569",
            "totalAllowance": "5268"
        },
        {
            "name": "Noelle",
            "sapId": "2455",
            "projectHours": "10",
            "leaveHours": "4",
            "afternoonShiftDays": "8",
            "nightShiftDays": "8",
            "daysEligibleTA": "11",
            "transportAllowance": "7340",
            "totalAllowance": "446"
        },
        {
            "name": "Mathilda",
            "sapId": "1291",
            "projectHours": "68",
            "leaveHours": "19",
            "afternoonShiftDays": "5",
            "nightShiftDays": "6",
            "daysEligibleTA": "14",
            "transportAllowance": "7443",
            "totalAllowance": "734"
        },
        {
            "name": "Gaylene",
            "sapId": "5890",
            "projectHours": "2",
            "leaveHours": "20",
            "afternoonShiftDays": "15",
            "nightShiftDays": "8",
            "daysEligibleTA": "17",
            "transportAllowance": "606",
            "totalAllowance": "1882"
        },
        {
            "name": "Catrina",
            "sapId": "5373",
            "projectHours": "49",
            "leaveHours": "15",
            "afternoonShiftDays": "20",
            "nightShiftDays": "13",
            "daysEligibleTA": "6",
            "transportAllowance": "3802",
            "totalAllowance": "976"
        },
        {
            "name": "Tersina",
            "sapId": "5638",
            "projectHours": "16",
            "leaveHours": "5",
            "afternoonShiftDays": "18",
            "nightShiftDays": "4",
            "daysEligibleTA": "15",
            "transportAllowance": "4065",
            "totalAllowance": "5637"
        },
        {
            "name": "Elyssa",
            "sapId": "4064",
            "projectHours": "30",
            "leaveHours": "10",
            "afternoonShiftDays": "10",
            "nightShiftDays": "4",
            "daysEligibleTA": "14",
            "transportAllowance": "4193",
            "totalAllowance": "6884"
        },
        {
            "name": "Gabi",
            "sapId": "1691",
            "projectHours": "13",
            "leaveHours": "1",
            "afternoonShiftDays": "6",
            "nightShiftDays": "20",
            "daysEligibleTA": "12",
            "transportAllowance": "1496",
            "totalAllowance": "9552"
        },
        {
            "name": "Kalina",
            "sapId": "9533",
            "projectHours": "87",
            "leaveHours": "8",
            "afternoonShiftDays": "18",
            "nightShiftDays": "10",
            "daysEligibleTA": "9",
            "transportAllowance": "3758",
            "totalAllowance": "2094"
        },
        {
            "name": "Valli",
            "sapId": "102",
            "projectHours": "57",
            "leaveHours": "10",
            "afternoonShiftDays": "10",
            "nightShiftDays": "17",
            "daysEligibleTA": "12",
            "transportAllowance": "7197",
            "totalAllowance": "5416"
        },
        {
            "name": "Shandie",
            "sapId": "8295",
            "projectHours": "19",
            "leaveHours": "3",
            "afternoonShiftDays": "1",
            "nightShiftDays": "12",
            "daysEligibleTA": "3",
            "transportAllowance": "3641",
            "totalAllowance": "7055"
        },
        {
            "name": "Pamella",
            "sapId": "5625",
            "projectHours": "80",
            "leaveHours": "14",
            "afternoonShiftDays": "16",
            "nightShiftDays": "15",
            "daysEligibleTA": "3",
            "transportAllowance": "9633",
            "totalAllowance": "7305"
        },
        {
            "name": "Daryl",
            "sapId": "2044",
            "projectHours": "42",
            "leaveHours": "1",
            "afternoonShiftDays": "11",
            "nightShiftDays": "18",
            "daysEligibleTA": "3",
            "transportAllowance": "3955",
            "totalAllowance": "7088"
        }
    ];

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => DATA, [])

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canPreviousPage,
        canNextPage,
        pageOptions,
        state,
        gotoPage,
        pageCount,
        setPageSize,
        prepareRow
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0 }
        },
        usePagination
    )

    const { pageIndex, pageSize } = state


    const navigate = useNavigate();


    const fakeTimePeriod = ['October 2021', 'November 2021', 'December 2021', 'January 2022', 'February 2022']

    const onLogout = (event) => {
        navigate("/")
    }

    $(document).ready(function () {
        let timePeriodState = fakeTimePeriod.length - 1;
        $('.tpC p').text(fakeTimePeriod.at(timePeriodState));

        $("#leftBtn").click(function () {
            if (timePeriodState != 0) {
                --timePeriodState;
                $('.tpC p').text(fakeTimePeriod.at(timePeriodState));
            }
        });

        $("#rightBtn").click(function () {
            if (timePeriodState != fakeTimePeriod.length - 1) {
                ++timePeriodState;
                $('.tpC p').text(fakeTimePeriod.at(timePeriodState));
            }
        });
    });

    return (
        <div className='Dashboard'>
            <HeaderDashboard />
            <div className="container dF">
                <h1 className="rounded shadow-sm text-center mx-auto my-3 py-2 border border-1 border-dark bg-white">Allowance Dashboard</h1>
                <div className="row mt-3 dSel">
                    <div className="col text-center">
                        <h6>Project</h6>
                        <select className="text-center Ds">
                            <option value={""} disabled>--- Select Project  ---</option>
                            <option value={"Digital"}>Digital</option>
                            <option value={"Enterprise Platforms"}>Enterprise Platforms</option>
                            <option value={"CET"}>CET</option>
                            <option value={"Data"}>Data</option>
                        </select>
                    </div>
                    <div className="col text-center">
                        <h6>Time Period</h6>
                        <div className='d-inline-flex tpC'>
                            <button id='leftBtn'>ᐸ</button>
                            <p></p>
                            <button id='rightBtn'>ᐳ</button>
                        </div>
                    </div>
                </div>
                <table className="table table-bordered mt-3 text-center " {...getTableProps()}>
                    <thead>
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {page.map(row => {
                            prepareRow(row)
                            return (
                                <tr className='bg-white' {...row.getRowProps()}>
                                    {row.cells.map(cell => {
                                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <div className='tBtns'>
                    <button onClick={() => gotoPage(0)} disabled={!canPreviousPage} className='LSbtn'>{'ᐸᐸ'}</button>
                    <button onClick={() => previousPage()} disabled={!canPreviousPage} className='LSbtn'>Previous</button>
                    <button onClick={() => nextPage()} disabled={!canNextPage} className='LSbtn'>Next</button>
                    <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage} className='LSbtn'>{'ᐳᐳ'}</button>
                    <span className='mx-2'>
                        Page
                        <strong>
                            {pageIndex + 1} of {pageOptions.length}
                        </strong>
                    </span>
                    <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))} className='LSbtn'>
                        {[10, 25, 50].map(pageSize => (
                            <option key={pageSize} value={pageSize} >
                                Show {pageSize}
                            </option>
                        ))}
                    </select>
                </div><br></br>

                <br />
                <div className="text-center my-4">
                    <button className="LSbtn">
                        Approve & Download
                    </button>
                </div>
            </div>
            <Footer/>
        </div>
    );
}