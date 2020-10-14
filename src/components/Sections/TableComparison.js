/** @jsx jsx */
import { jsx, Styled, Flex, Container, Box} from 'theme-ui'
import Img from 'gatsby-image'


export const TableComparison = ({content, yes, no, heading, subheading, backgroundColor}) => {

    return (
    <section sx={{backgroundColor: `${backgroundColor}`}}>
        <Container sx={{py: 6}}>
            <Styled.h2 sx={{textAlign: 'center', color: 'dark', width: '90%', mx: 'auto', textTransform: 'uppercase'}}>{heading}</Styled.h2>
            <Styled.p sx={{textAlign: 'center', color: 'dark', width: '80%', mx: 'auto', mb: '60px', textTransform: 'uppercase'}}>{subheading}</Styled.p>
        
            {content.map((item,i) => (
                <div key={i} sx={{overflow: 'auto'}}>
                    <table className={'tableComparison'} sx={{width: ['auto','90%'], mx:'auto', borderCollapse: 'collapse', borderSpacing: 0, tableLayout: 'fixed'}}>
                        <thead>
                            <tr>
                                <th sx={{width: ['40%','20%'], border: '1px solid #000', p: '30px', backgroundColor: 'primary'}}></th>
                                {item.th.map((desc, i) => (
                                    <th key={i} sx={{border: '1px solid #000', px: [0,3]}} > 
                                        <Styled.p sx={{fontWeight: '600', textTransform: 'uppercase', fontSize: [0,0,3,3], px: [5,0]}} dangerouslySetInnerHTML={{ __html: desc }} /> 
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {item.tr.map((content, i) => (
                                <tr key={i}>
                                    <td sx={{textAlign: 'left', py: ['5px',3], px: ['5px','40px'], border: '1px solid #000', backgroundColor: 'primary'}}>
                                        <Styled.p sx={{fontWeight: '600', fontSize: [0,0,3,3], color: 'white', textAlign: 'center'}} dangerouslySetInnerHTML={{ __html: content.title}} /> 
                                    </td>
                                    {content.content.map((table, i) => (
                                        <td key={i} sx={{py: ['5px','20px'], border: '1px solid #000', textAlign: 'center'}}>
                                            <Img fluid={table ? yes.childImageSharp.fluid : no.childImageSharp.fluid} sx={{width: "100%"}} sx={{width:['20%','30px'], mx: 'auto', verticalAlign: 'middle'}} alt='' />
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </Container>
        
    </section>
    ) 
}