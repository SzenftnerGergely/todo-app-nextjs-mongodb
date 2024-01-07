import Todo from "@/app/(models)/Todo";
import { NextResponse } from "next/server";

type Props = {
  params: { id: number };
};

export async function GET(req: Request, { params }: Props) {
  try {
    const { id } = params;

    const foundTodo = await Todo.findOne({ _id: id });
    return NextResponse.json({ foundTodo }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: Props) {
  try {
    const { id } = params;
    await Todo.findByIdAndDelete(id);

    return NextResponse.json({ message: "Todo Deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function PUT(req: Request, { params }: Props) {
  try {
    const { id } = params;
    const body = await req.json()
    const todoData = body.formData

    const updateTodoData = await Todo.findByIdAndUpdate(id, {
        ...todoData
    })

    return NextResponse.json({ message: "Todo Updated" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
