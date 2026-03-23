"use client";

import ActionConfirmationDialog from "./action-confirmation-dialog";
import { Button } from "./button";

export function ActionConfirmationBasicDemo() {
  const handleDelete = () => {
    alert("Action Confirmed: Account Deleted (Simulated)");
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full p-4 border rounded-xl bg-muted/20">
      <ActionConfirmationDialog
        title="Delete Account?"
        description="This action cannot be undone. All your data will be permanently removed from our servers."
        action={handleDelete}
        confirmText="Yes, delete my account"
      >
        <Button variant="destructive">Delete Account</Button>
      </ActionConfirmationDialog>
    </div>
  );
}

export function ActionConfirmationCustomDemo() {
  const handleArchive = () => {
    alert("Action Confirmed: Project Archived (Simulated)");
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full p-4 border rounded-xl bg-muted/20">
      <ActionConfirmationDialog
        title="Archive Project?"
        description="The project will be moved to the archive and can be restored later."
        action={handleArchive}
        confirmText="Archive"
        cancelText="Keep Project"
      >
        <Button variant="outline">Archive Project</Button>
      </ActionConfirmationDialog>
    </div>
  );
}
