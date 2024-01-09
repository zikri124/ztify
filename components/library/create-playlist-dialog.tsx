import { Button } from "../ui/button"
import { Input } from "../ui/input"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image"

const CreatePlaylistDialog = () => {
    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline">
                        <Image alt="add-logo" height={28} width={28} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAkklEQVR4nO3XMQoCMRBG4Xc8YyHevzCga6GXyCKkClqIsP8G3wfTz+xrNiBJH5yBJ/AATkzoDrQ+CxNqw0yneUCYBdIskGaBNAukWSDNAr84AvXNV0xNBco3B1x3sHQbZvmrAwpw2cHSrc9rlwMbG5eYTvOAMAukWSDNAmkWSLNAmgXS6vA/P50C3Pps/hiRxBxWyNwXgMwNpAgAAAAASUVORK5CYII=" className="invert" />
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                    <form>
                        <DialogHeader>
                            <DialogTitle>Create New Playlist</DialogTitle>
                        </DialogHeader>
                        <div className="flex flex-col gap-2 mt-4">
                            <label htmlFor="create">Enter Playlist Name</label>
                            <Input type="text" id="create" placeholder="Name" />
                        </div>
                        <DialogFooter className="sm:justify-end mt-8">
                            <DialogClose asChild>
                                <Button type="submit">Create</Button>
                            </DialogClose>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default CreatePlaylistDialog
