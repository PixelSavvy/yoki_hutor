import { MessageCircleWarning } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export const ImportantAlert = () => {
    return (
        <div>
            <Alert className="space-x-4 bg-secondary text-background border-none py-6">
                <AlertTitle className="mb-4 flex place-items-start gap-2 pl-4">
                    <MessageCircleWarning
                        className="text-background"
                        size={32}
                    />
                    Важно
                </AlertTitle>
                <AlertDescription className="ml-0">
                    Отдых в Йокихутор только для семейного отдыха - без
                    вечеринок и шумных компаний
                </AlertDescription>
            </Alert>
        </div>
    );
};
