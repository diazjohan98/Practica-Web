import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';

export const CardsHobbiesJohan = () => {
    const cardsData = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            description: 'ir al Gimnasio',
        },
        {
            id: 2,
            image: 'https://plus.unsplash.com/premium_photo-1683842178385-5e0742551bde?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            description: 'Ciclismo',
        },
        {
            id: 3,
            image: 'https://plus.unsplash.com/premium_photo-1683140655656-20448abc55da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            description: 'Actualizarme en programación',
        },
        {
            id: 4,
            image: 'https://images.unsplash.com/photo-1571008887538-b36bb32f4571?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            description: 'Running',
        },
        {
            id: 5,
            image: 'https://plus.unsplash.com/premium_photo-1661286678499-211423a9ff5e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            description: 'Festivales de Techno',
        },
        {
            id: 6,
            image: 'https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            description: 'Viajar',
        },
        {
            id: 7,
            image: 'https://images.unsplash.com/photo-1491309055486-24ae511c15c7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            description: 'Leer',
        },

        {
            id: 8,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Baron_Rojo_Sur_-_America_de_Cali.jpg/300px-Baron_Rojo_Sur_-_America_de_Cali.jpg',
            description: 'Ir al estadio',
        }
    ];
    const cardStyle = {
        backgroundColor: 'black',
        color: '#1976d2',
        border: '1px solid #1976d2'
    };

    const imageStyle = {
        position: 'relative', // Asegura que se puede ajustar la posición de la imagen
        zIndex: '1', // Establece la imagen por encima del borde
    };


    return (
        <Grid container spacing={3}>
            {cardsData.map((card) => (
                <Grid item key={card.id} xs={12} sm={6} md={4} lg={3}>
                    <Card style={cardStyle}>
                        <CardMedia
                            component="img"
                            alt={`Imagen ${card.id}`}
                            height="200"
                            image={card.image}
                            style={imageStyle} // Aplica el estilo a la imagen
                        />
                        <CardContent>
                            <Typography variant="body2" component="p">
                                {card.description}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};



