import { NextResponse } from "next/server"
import { headers, cookies} from 'next/headers'
import { redirect } from 'next/navigation'

export async function DELETE(req: Request, { params} : {params : {
    id: string
}}) {

    const id = params.id 

    const headerList = headers()
    const type = headerList.get('Content-Type') // can set any type in headers in postman
    const cookiesList = cookies() 
    const coo2 = cookiesList.get('Cookie_2')?.value // set in postman cookie
    // logic to delete
    return NextResponse.json({id, type, coo2})
    
}