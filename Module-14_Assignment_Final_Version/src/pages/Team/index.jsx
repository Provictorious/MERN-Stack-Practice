import Breadcrum from "../../components/Breadcrum";
import { Container, Wrapper, Spacing } from "../../components/Common";
import TeamList from "./TeamList";
import SectionTitle from "../../components/SectionTitle";
import SectionSubTitle from "../../components/SectionSubTitle";


const apiURL = "https://raw.githubusercontent.com/Ramrachai/ostad-mern/main/module14/database/teamData.json";

export default function Team() {
    return (
        <>
            <Breadcrum bg={"gray"}/>
            <Wrapper>
                <Container>
                    <Spacing height="2" />
                    <SectionTitle title={"Our Team Member"} />
                    <SectionSubTitle subTitle={"Check our awesome team members"} />
                    <TeamList apiEndpoint={apiURL} />
                </Container>
            </Wrapper>
        </>
    )
}



