export interface Event {
    groupId: number;
    groupName: string;
    organizationName: string;
    sponsorName: string;
    sponsorPhone: string;
    sponsorEmail: string;
    maxGroupSize: number;
    members: Array<object>;
}
