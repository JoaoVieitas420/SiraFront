import { User } from "lucide-react";
import Image from "next/image";
import { getTeamMembers, TeamGridBlockData } from "@/lib/api";

export async function TeamGridBlock({ data }: { data: TeamGridBlockData }) {
  const members = await getTeamMembers();

  return (
    <section className="bg-sir-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-display font-bold text-4xl text-sir-black mb-12">
          {data.heading}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {members.map((member) => (
            <div key={member.id} className="bg-sir-white border border-sir-light rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow text-center pb-6 flex flex-col">
              <div className="w-full aspect-square bg-sir-light flex items-center justify-center mb-6 overflow-hidden relative">
                {member.image ? (
                  <Image
                    src={member.image_small || `/storage/${member.image}`}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                ) : (
                  <User className="h-20 w-20 text-sir-medium" />
                )}
              </div>
              <div className="px-4 flex-1">
                <h3 className="font-display font-bold text-xl text-sir-black mb-1">
                  {member.name}
                </h3>
                <p className="text-sir-medium font-medium mb-3">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
