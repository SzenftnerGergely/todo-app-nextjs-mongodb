"use client"

import { useRouter } from "next/navigation"
import React, { ChangeEvent, ChangeEventHandler, FormEvent, useState } from "react"
import { TodoType } from "../(models)/types";

type StartingTicketData = {
    title: string;
    description: string;
    priority: number;
    progress: number;
    status: string;
    category: string;
}

const TicketForm = ({ticket}) => {

    const EDITMODE = ticket._id === "new" ? false : true

    const router = useRouter()

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const value = e.target.value
        const name = e.target.name

        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (EDITMODE) {
          const res = await fetch(`/api/Tickets/${ticket._id}`, {
            method: "PUT",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({ formData }),
          });
          if (!res.ok) {
            throw new Error("Failed to update ticket");
          }
        } else {
          const res = await fetch("/api/Tickets", {
            method: "POST",
            body: JSON.stringify({ formData }),
            //@ts-ignore
            "Content-Type": "application/json",
          });
          if (!res.ok) {
            throw new Error("Failed to create ticket");
          }
        }
    
        router.refresh();
        router.push("/");
      };

    const startingTicketData = {
        title: "",
    }

    if (EDITMODE) {
        startingTicketData["title"] = ticket.title;
      }

    const [formData, setFormData] = useState<StartingTicketData>(startingTicketData)

    return (
        <div className="flex justify-center">
            <form
                className="flex flex-col gap-3 w-1/2"
                method="post"
                onSubmit={handleSubmit}
            >
                <h3>{EDITMODE ? "Update Your Ticket"  : "Create Your Ticket" }</h3>
                <label>Title</label>
                <input
                    id="title"
                    name="title"
                    type="text"
                    onChange={handleChange}
                    required={true}
                    value={formData.title}
                />
                <input
                    type="submit"
                    className="btn max-w-xs"
                    value={EDITMODE ? "Update Your Ticket"  : "Create Your Ticket" }
                />
            </form>
        </div>
    )
}

export default TicketForm
