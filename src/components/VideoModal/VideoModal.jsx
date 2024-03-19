import { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { BsSkipStartFill } from "react-icons/bs";
import { Button } from "../ui/button";

const VideoModal = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <div>
            <ModalVideo
                channel="youtube"
                youtube={{ mute: 0, autoplay: 0 }}
                isOpen={isOpen}
                videoId="23hXAS3i-yU"
                onClose={() => setOpen(false)}
            />
            <Button onClick={() => setOpen(true)} className="ml-5 drop-shadow-lg bg-white text-[#6558F5] hover:bg-slate-300">Watch Demo  <BsSkipStartFill size={20} /></Button>
        </div>
    );
};

export default VideoModal;