/* eslint-disable @typescript-eslint/no-explicit-any */
import { getData } from "@/data/data";
import React from "react";
import ProfileList from "./ProfileList";

interface ContactAppState {
    profiles: any[];
}

class ContactApp extends React.Component<object, ContactAppState> {
    constructor(props: any) {
        super(props)
        this.state = {
            profiles: getData()
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this)
    }

    onDeleteHandler(id: number) {
        const profiles = this.state.profiles.filter(profile => profile.id !== id)
        this.setState({profiles})
    }

    render() {
        return (
            <div>
                <h1 className="text-center">
                    Daftar Profil
                </h1>
                <ProfileList profiles={this.state.profiles} onDelete={this.onDeleteHandler} />
            </div>
        )
    }
}

export default ContactApp;
