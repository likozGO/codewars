function fight(defender, attacker) {
    switch (defender + attacker) {
        case 'kA':
            return 'k'
            break;
        case 'kP':
            return 'P'
            break;
        case 'kS':
            return 'S'
            break;
        case 'kK':
            return 'K'
            break;
        case 'sA':
            return 'A'
            break;
        case 'sP':
            return 's'
            break;
        case 'sS':
            return 'S'
            break;
        case 'sK':
            return 'K'
            break;
        case 'aA':
            return 'A'
            break;
        case 'aP':
            return 'P'
            break;
        case 'aS':
            return 'a'
            break;
        case 'aK':
            return 'K'
            break;
        case 'pA':
            return 'A'
            break;
        case 'pP':
            return 'P'
            break;
        case 'pS':
            return 'S'
            break;
        case 'pK':
            return 'p'
            break;




        case 'Ak':
            return 'k'
            break;
        case 'Pk':
            return 'P'
            break;
        case 'Sk':
            return 'k'
            break;
        case 'Kk':
            return 'k'
            break;
        case 'As':
            return 'A'
            break;
        case 'Ps':
            return 's'
            break;
        case 'Ss':
            return 's'
            break;
        case 'Ks':
            return 's'
            break;
        case 'Aa':
            return 'a'
            break;
        case 'Pa':
            return 'a'
            break;
        case 'Sa':
            return 'a'
            break;
        case 'Ka':
            return 'K'
            break;
        case 'Ap':
            return 'p'
            break;
        case 'Pp':
            return 'p'
            break;
        case 'Sp':
            return 'S'
            break;
        case 'Kp':
            return 'p'
            break;
        default:
            return - 1
            break;
    }
}

function fightResolve(defender, attacker)
{
    return fight(defender, attacker);
}