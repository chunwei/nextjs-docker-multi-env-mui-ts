/*
 * @Author: Chunwei Lu
 * @Date: 2022-05-23 12:55:53
 * @LastEditTime: 2022-05-23 13:25:55
 * @LastEditors: Chunwei Lu
 * @FilePath: /nextjs-docker-multi-env/pages/api/_middleware.ts
 */
import { NextResponse } from "next/server";

export function middleware(req) {
  const basicAuth = req.headers.get("authorization");
  console.log("basicAuth", basicAuth);
  if (basicAuth) {
    const [user, password] = Buffer.from(basicAuth.split(" ")[1], "base64")
      .toString()
      .split(":");
    console.log("user", user);
    console.log("password", password);
    if (user === "admin" && password === "password") {
      return NextResponse.next();
    }
  }
  return new Response("Auth required", {
    status: 401,
    headers: {
      "WWW-Authenticate": "Basic realm:='Secure Area'",
    },
  });
}
