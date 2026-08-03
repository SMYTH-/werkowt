import Image from "next/image";

export function TrainerCard() {
    return (
        <div className="bg-white rounded-lg p-6">
            <div className="flex flex-col gap-4">
                <Image src="/images/trainer-1.jpg" alt="Trainer 1" width={100} height={100} />
            </div>
        </div>
    );
}