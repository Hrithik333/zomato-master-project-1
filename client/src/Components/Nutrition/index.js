import React from 'react';

// components
import NutritionCarousel from './NutritionCarousel';
import NutritionHeroCarousel from './NutritionHeroCarousel';
import NutritionMainCard from './NutritionMainCard';

const Nutrition = () => {
    return (
        <div>
            <NutritionHeroCarousel />
            <div className="my-8">
                <NutritionCarousel />
            </div>
            <div className="flex flex-wrap justify-between">
                <NutritionMainCard
                    bg="red"
                    image="https://dote.zmtcdn.com/prod/data/admin_assets/images/34e/384e52f7a60c840377ede182dcd3d34e_1614427090.png?output-format=webp"
                />
                <NutritionMainCard
                    bg="red"
                    image="https://dote.zmtcdn.com/prod/data/admin_assets/images/34e/384e52f7a60c840377ede182dcd3d34e_1614427090.png?output-format=webp"
                />
                <NutritionMainCard
                    bg="red"
                    image="https://dote.zmtcdn.com/prod/data/admin_assets/images/34e/384e52f7a60c840377ede182dcd3d34e_1614427090.png?output-format=webp"
                />
                <NutritionMainCard
                    bg="red"
                    image="https://dote.zmtcdn.com/prod/data/admin_assets/images/34e/384e52f7a60c840377ede182dcd3d34e_1614427090.png?output-format=webp"
                />
                <NutritionMainCard
                    bg="red"
                    image="https://dote.zmtcdn.com/prod/data/admin_assets/images/34e/384e52f7a60c840377ede182dcd3d34e_1614427090.png?output-format=webp"
                />
                <NutritionMainCard
                    bg="red"
                    image="https://dote.zmtcdn.com/prod/data/admin_assets/images/34e/384e52f7a60c840377ede182dcd3d34e_1614427090.png?output-format=webp"
                />

            </div>
        </div>
    )
}

export default Nutrition;
