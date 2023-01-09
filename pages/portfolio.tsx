import {
  Box,
  Heading, 
  Image, 
  Link, 
  Grid, 
  Skeleton, 
  Tag, 
  Text, 
  VStack,  
  GridItem,
  Tooltip,
  LinkBox,
  LinkOverlay,
  AspectRatio,
  useColorModeValue as mode} from "@chakra-ui/react"; 
  import { HeroSection } from '../sections/PortfolioPage/hero';
  import { styled } from '@config/stitches.config';
  
  const ContactSectionSection = styled('section', {
    '> div': {
      marginBottom: '6rem',
  
      '.contact-content': {
        maxWidth: '42rem',
        paddingTop: '3rem',
        borderTop: '2px dashed $surface100',
  
        '.subtitle': {
          color: '$subtext',
          marginTop: '1rem',
          marginBottom: '3rem',
        },
      },
  
      '.contact-details': {
        '.contact-button': {
          display: 'flex',
          flexDirection: 'column-reverse',
          flexWrap: 'wrap',
          columnGap: '4rem',
          rowGap: '3rem',
          marginBottom: '1rem',
  
          '@sm': { flexDirection: 'row' },
  
          '> button': {
            width: 220,
          },
  
          '.contact-person': {
            display: 'flex',
            columnGap: '0.5rem',
            alignItems: 'center',
            color: '$primary900',
            fontWeight: 500,
  
            span: {
              display: 'block',
              color: '$subtext',
              fontWeight: 400,
              fontSize: '$small',
            },
          },
        },
      },
    },
  });
  
  
  const BookmarkItem = ({title,  excerpt, cover, type, link, created, tags}) => {
  
    return (
      <LinkBox  as="article"  bg="BlackAlpha.600">
      <Tooltip label={link}> 
      <VStack   alignItems="center"
      justifyContent={{ base: 'center', md: 'flex-start' }}
      rounded="md"
      spacing={0}
      transitionDuration="slow"
      transitionProperty="transform"
      transitionTimingFunction="ease-out"
   >
              <AspectRatio  w="full" ratio={16 / 9}>
            <Link href={link} isExternal={true}>
            <Image
            src={cover}
            boxSize='120px'
            width='200px'
            objectFit='cover'
              />
                  </Link>
                  </AspectRatio>
                  <VStack alignItems="flex-start" flex={1} w="full" p={3} spacing={1}>
              <LinkOverlay w="full" href={link} isExternal>
               <Text fontSize='md' noOfLines={1}>
                  {title}
                </Text>
              </LinkOverlay>
            </VStack>
              
        </VStack>
        </Tooltip>
        </LinkBox>
    )
  }
  
  const Bookmarks = ({bookmarks}) => {
  
      return (
        <>
         <HeroSection openContactModal={() => setIsModalOpen(true)} />
        <ContactSectionSection id="contact-section">
              {bookmarks !== null && bookmarks.length > 0
                  ?
                  <VStack w="full" spacing={4}>
                  <Grid templateColumns='repeat(4, 1fr)' gap={12}>
                      {bookmarks.map((b) => (
                          <GridItem key={b.link} as="article">
                          <BookmarkItem {...b}/>
                          </GridItem>
                      ))}
                  </Grid>
              
                  </VStack>
  
                  : <Text>Favoritos não encontrados.</Text>}
      
          
          </ContactSectionSection>
          </>
      )
  }
  
  
  export const getStaticProps = async context => {
      const url = `https://api.raindrop.io/rest/v1/raindrops/0`;
  
      const res = await fetch(url, {
          method: "get",
          headers: new Headers({
              Authorization: `Bearer ${process.env.RAINDROP_ACCESS_TOKEN}`,
              "Content-Type": "application/x-www-form-urlencoded",
          }),
      });
  
      const bookmarks = await res.json();
  
      if (!bookmarks) {
          return {
              notFound: true,
          };
      }
  
      return {
          props: {
              bookmarks: bookmarks.items,
          },
          revalidate: 1,
      }
  }
  
  export default Bookmarks;