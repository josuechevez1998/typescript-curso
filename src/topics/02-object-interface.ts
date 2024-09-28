let skills : string[] = ['Bash', 'Counter', 'Healing'];

interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string[]
}

const strider: Character = {
    name: 'Strider',
    hp: 1000,
    skills: skills
}

strider.name = 'Riverdell';
strider.hp = 2000;
strider.skills.push('Nueva');

console.table(strider);
