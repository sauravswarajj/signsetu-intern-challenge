"use client";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Navbar from "@/components/Navbar";

type Grade = {
  id: string;
  subject: string;
  score: number;
};

export default function DashboardPage() {
  const [grades, setGrades] = useState<Grade[] | null>(null);
  const supabase = createClient();

  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.from("grades").select("*");
      setGrades(data);
    };
    getData();
  }, [supabase]);

  return (
    <>
      <Navbar />
      <div className="container mx-auto py-12">
        <Card>
          <CardHeader>
            <CardTitle>Your Grades</CardTitle>
            <CardDescription>
              This data is protected by Supabase Row-Level Security. You can
              only see your own grades.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {grades && grades.length > 0 ? (
              <ul className="divide-y divide-gray-700">
                {grades.map((grade) => (
                  <li
                    key={grade.id}
                    className="flex justify-between items-center py-4"
                  >
                    <span className="text-lg">{grade.subject}</span>
                    <span className="text-xl font-bold">{grade.score}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="py-8 text-center text-gray-400">
                Loading grades or no grades found for your account.
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
}
