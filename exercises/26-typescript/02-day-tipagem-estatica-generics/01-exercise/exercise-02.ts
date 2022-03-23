type Slice = 4 | 6 | 8;

type Type = 'Comum' | 'Vegetariana' | 'Doce';
type CommonFlavors = 'Calabresa' | 'Frango' | 'Peperone';
type VegetarianFlavors = 'Marguerita' | 'Palmito' | 'Cogumelo';
type SweetFlavors = 'Nutela' | 'Goiabada com queijo' | 'Marshmallow';

interface Pizza {
  flavor: string;
  type: Type;
  slices: Slice;
}

interface PizzaComum extends Pizza {
  flavor: CommonFlavors;
}

interface PizzaVegetariana extends Pizza {
  flavor: VegetarianFlavors;
}

interface PizzaDoce extends Pizza {
  flavor: SweetFlavors;
}

const calabreza: PizzaComum = { type: 'Comum', slices: 8, flavor: 'Calabresa' };
const marguerita: PizzaVegetariana = {
  type: 'Vegetariana',
  flavor: 'Marguerita',
  slices: 6,
};
const nutela: PizzaDoce = {
  type: 'Doce',
  flavor: 'Goiabada com queijo',
  slices: 4,
};
