export interface Trial {
    GroupId: string;
    GroupName: string;
    Date: string,
    OrganizationName: string;
    SponsorName: string;
    SponsorPhone: string;
    SponsorEmail: string;
    MaxGroupSize: number;
    Members?: Array<object>;
}
