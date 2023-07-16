"use client";

import ThemeRegistry from "@/theme/ThemeRegistry";
import "./globals.css";
import { Inter } from "next/font/google";
import * as React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Felipe Ma",
	description: "Made with Next.js + MUI",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	React.useEffect(() => {
		AOS.init({
			duration: 800,
			easing: "ease-in-out",
			once: true,
			mirror: false,
		});
	}, []);
	return (
		<html lang="en">
			<ThemeRegistry>
				<body className={inter.className}>{children}</body>
			</ThemeRegistry>
		</html>
	);
}
