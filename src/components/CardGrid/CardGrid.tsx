import { Button } from "../Button/Button";
import { TrainerCard } from "./TrainerCard";

export function CardGrid() {
    return (
    <div className="py-16">
       <div className="flex flex-row gap-4 justify-between">
            <div>
                <p className="eyebrow">Featured trainers</p>
                <h2 className="font-display text-h1 font-bold mb-10">Find a trainer who fits.</h2>
            </div>
            <div className="text-right">
                <Button
                size="large"
                label="View all trainers"
                className="w-full sm:w-auto"
            />
            </div>
        </div>

        <div>
            <div className="text-h3 font-bold mb-10">Filters</div>

            <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
                <TrainerCard />
            </div>
        </div>
    </div> 
    );
}