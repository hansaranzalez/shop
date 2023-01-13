export class Avatar {
    public id: string;
    public name: string;
    public url: string;

    constructor(avatar?: Avatar) {

        if (avatar) {
            this.id = avatar.id;
            this.name = avatar.name;
            this.url = avatar.url;
        } else {
            this.id = "";
            this.name = "";
            this.url = "";
        }

        return this;
    }
}