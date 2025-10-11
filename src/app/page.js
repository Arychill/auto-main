"use client"
import Desc from "@/components/desc"
import Header from "@/components/header"
import Info from "@/components/info"
import Services from "@/components/services"
import Head from "next/head"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Router from "next/router"

import * as ga from "@/lib/gtag"

export default function Home() {
    useEffect(() => {
        const handleRouteChange = (url) => {
            ga.pageview(url)
        }
        //When the component is mounted, subscribe to router changes
        //and log those page views
        Router.events.on("routeChangeComplete", handleRouteChange)

        // If the component is unmounted, unsubscribe
        // from the event with the `off` method
        return () => {
            Router.events.off("routeChangeComplete", handleRouteChange)
        }
    }, [])
    return (
        <main>
            <Desc />
            <Info />
            <Services />
        </main>
    )
}
