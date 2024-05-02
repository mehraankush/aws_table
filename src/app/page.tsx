"use client"
import CustomTable from "@/components/CustomTable";
import axios from "axios";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Home() {
    const [data, setdata] = useState()
    const [toolsOpen, setToolsOpen] = useState(false);
    const appLayout = useRef();

  useEffect(() => {
    getData()
  }, [])

  const getData = async() =>{
    const res = await axios.get('http://cais-trade-service-sbx-911165204.us-east-1.elb.amazonaws.com/trades')
    console.log(res,"response")
    setdata(res?.data)
  }
  
  const itemsProps = [
    {
      name: "Item 1",
      alt: "First",
      description: "This is the first item",
      type: "1A",
      size: "Small"
    },
    {
      name: "Item 7",
      alt: "First",
      description: "This is the first item",
      type: "1A",
      size: "Small"
    },
    {
      name: "Item 8",
      alt: "First",
      description: "This is the first item",
      type: "1A",
      size: "Small"
    },
    {
      name: "Item 9",
      alt: "First",
      description: "This is the first item",
      type: "1A",
      size: "Small"
    },
    {
      name: "Item 10",
      alt: "First",
      description: "This is the first item",
      type: "1A",
      size: "Small"
    },
    {
      name: "Item 11",
      alt: "First",
      description: "This is the first item",
      type: "1A",
      size: "Small"
    },
    {
      name: "Item 12",
      alt: "First",
      description: "This is the first item",
      type: "1A",
      size: "Small"
    },
    {
      name: "Item 2",
      alt: "Second",
      description: "This is the second item",
      type: "1B",
      size: "Large"
    },
    {
      name: "Item 3",
      alt: "Third",
      description: "-",
      type: "1A",
      size: "Large"
    },
    {
      name: "Item 4",
      alt: "Fourth",
      description: "This is the fourth item",
      type: "2A",
      size: "Small"
    },
    {
      name: "Item 5",
      alt: "-",
      description:
        "This is the fifth item with a longer description",
      type: "2A",
      size: "Large"
    },
    {
      name: "Item 6",
      alt: "Sixth",
      description: "This is the sixth item",
      type: "1A",
      size: "Small"
    }
  ]
  const columnDispokayProps = [
    { id: "id", alwaysVisible: true},
    { id: "accountNumber" },
    { id: "baseCurrentAmount"},
    { id: "baseCurrentCd" },
    { id: "origCurrentAmount" },
    { id: "quantity"},
    { id: "baseCurrentTradePrice"},
  ]

  const columnDefinitionsProps = [
    {
      id: "id",
      header: "Trade id",
      cell: item => <Link href="#" className="text-blue-600">{item.id}</Link>,
      sortingField: "id",
      isRowHeader: true,
      minWidth: 310,
    },
    {
      id: "accountNumber",
      header: "Account Number",
      cell: item => item.accountNumber,
      sortingField: "accountNumber",
      isRowHeader: true
    },
    {
      id: "baseCurrentAmount",
      header: "Base Current Amount",
      cell: item => item.baseCurrentAmount,
      sortingField: "baseCurrentAmount"
    },
    {
      id: "baseCurrentCd",
      header: "Base Current Cd",
      cell: item => item.baseCurrentCd
    },
    {
      id: "origCurrentAmount",
      header: "original Current Amount",
      cell: item => item.origCurrentAmount
    },
    {
      id: "quantity",
      header: "Quantity",
      cell: item => item.quantity
    },
    {
      id: "baseCurrentTradePrice",
      header: "Base Current Trade Price",
      cell: item => item.baseCurrentTradePrice
    },
  ]

  return (
    <div className="flex min-h-screen justify-center items-center bg-white">
      <div className="w-[70vw]">
        <CustomTable
          itemsProps={data}
          columnDispokayProps={columnDispokayProps}
          columnDefinitionsProps={columnDefinitionsProps}
        />
      </div>
    </div>
  );
}
