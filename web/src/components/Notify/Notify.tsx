import { FC, useState } from "react";

import { FaCheck, FaBan, FaComment } from "react-icons/fa";

import './notify.css';
import { useNuiEvent } from "../../hooks/useNuiEvent";

interface NotifyPayload
{
    visible: boolean;
    title: String;
    type: NotifyType;
    message: String;
}

type NotifyType = "error" | "succes" | "default"; 

const Notify: FC = (  ) =>
{
    const [ notifyState, setNotifyState ] = useState<NotifyPayload>({ visible: false, title: "Unknown", type: "default", message: "Unknown" });

    useNuiEvent<NotifyPayload>("showNotify", ({ visible, title, type, message }) =>
    {
        setNotifyState({ visible, title, type, message });
    });

    return (
        <div style={ { visibility: notifyState.visible ? "visible" : "hidden" } }>
            <div className="message-container" style={ { backgroundColor: notifyState.type == "default" ? "rgb(44,168,224)" : notifyState.type == "error" ? "rgb(232,85,108)" : "rgb(58,180,139)" } }>
                <div className="icon">
                    {   notifyState.type == "default" && <FaComment />

                    }

                    { notifyState.type == "error" && <FaBan />

                    }

                    { notifyState.type == "succes" && <FaCheck />

                    }
                </div>
                <div className="message">
                    <div className="message-title">{notifyState.title}</div>
                    <div className="message-message">{notifyState.message}</div>
                </div>
            </div>
        </div>
    )
}

export default Notify;