import React from 'react';
import styled from 'styled-components';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={} span={} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={} title={} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={} 
                        title={}
                        subTitle={}
                        text={} 
                    />
                    <ResumeItem 
                        year={} 
                        title={}
                        subTitle={}
                        text={} 
                    />
                    {/* <ResumeItem 
                        year={} 
                        title={}
                        subTitle={}
                        text={} 
                    /> */}
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={} title={} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={} 
                        title={}
                        subTitle={}
                        text={} 
                    />
                    <ResumeItem 
                        year={} 
                        title={}
                        subTitle={}
                        text={} 
                    />
                    {/* <ResumeItem 
                        year={'2015 - 2017'} 
                        title={'High School Graduation'}
                        subTitle={'ABC School'}
                        text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. '} 
                    /> */}
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume