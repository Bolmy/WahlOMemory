import linkeLogo from '@/assets/Images/Logo_Die_Linke_(2023).svg'
import afdLogo from '@/assets/Images/AfD_Logo_2021.svg'
import grueneLogo from '@/assets/Images/Bündnis_90_-_Die_Grünen_Logo.svg'
import cduLogo from '@/assets/Images/Flag_of_CDU_2023.svg'
import spdLogo from '@/assets/Images/Flag_of_the_Social_Democratic_Party_of_Germany.svg'
import fdpLogo from '@/assets/Images/Flag_of_the_Free_Democratic_Party_of_Germany_(main_variant).svg'


export function loadQuestions(){
    var logos=loadLogos()
    
    return [
        {
            question: "Wie wird die politische Bildung in und über Europa innerhalb und außerhalb von Schule, Ausbildung und Studium gestärkt?",
            answers: [
                {
                    logo: logos[0],
                    party: "CDU",
                    answer: "[Wir] sehen in der politischen Bildung einen Schlüssel zur Stärkung der Demokratie und des europäischen Zusammenhalts. Deshalb begrüßen wir, dass die politische Bildung Teil der nationalen Lehrpläne für die allgemeine Bildung in allen Mitgliedstaaten ist. Allerdings liegt der Fokus auf der nationalen Ebene, weniger auf der europäischen Dimension. Wir setzen uns dafür ein, dass Europa eine prominentere Rolle in der politischen Bildung erhält. Die europäische Gesetzgebung, die Rolle der Kommission und des Europäischen Parlaments, die Verteilung der Zuständigkeiten und das Zusammenspiel von EU und Mitgliedstaaten müssen ebenso Gegenstand der politischen Bildung sein, wie die Geschichte der EU und vor allem unsere gemeinsamen europäischen Werte."
                },
                {
                    logo: logos[4],
                    party: "Bündnis 90 Die Grünen",
                    answer: "Wir wollen eine Europäische Zentrale für politische Bildung gründen. Sie soll sich vor allem an Jugendliche und junge Erwachsene wenden, zugleich aber allen Bürger*innen als Informationsquelle zur Verfügung stehen und breite Angebote im digitalen Raum schaffen. Sie kann den europäischen Gedanken und komplexe europäische Prozesse zielgruppengerecht erklären. Diese Zentrale soll zudem die digitale Medienkompetenz der Menschen in Zeiten von Desinformation und Fake News stärken. Sie soll unabhängig und nach klaren wissenschaftlichen und ethischen Kriterien arbeiten können. So fördern wir unsere demokratischen Werte und stärken den Einsatz gegen Diskriminierung."
                },
                {
                    logo: logos[1],
                    party: "SPD",
                    answer: "Demokratie braucht politische Bildung – innerhalb und außerhalb von Schule. Schule erreicht alle jungen Menschen. Hier müssen die wesentlichen Grundlagen von demokratischer politischer Bildung vermittelt werden. Angesichts der derzeit großen Unterschiede – je nach Bundesland und Schulform – wollen wir hier zu länderübergreifenden Standards kommen. Politische Bildung in der Schule muss so früh wie möglich einsetzen, spätestens aber in Klasse 5. Wichtige Orte der außerschulischen Bildung sind Kinder- und Jugendverbände, Vereine sowie Jugendfreiwilligendienste im In- und Ausland. Unser Ziel bleibt es daher, den Kinder- und Jugendplan des Bundes bedarfsgerecht auszustatten und die Jugendfreiwilligendienste nachfragegerecht auszubauen."
                },
                {
                    logo: logos[2],
                    party: "FDP",
                    answer: "Wir wollen – in Anlehnung an die Arbeit der Bundeszentrale für politische Bildung bei uns in Deutschland – neutrale politische Bildung und Informationen europaweit aufarbeiten und digital erlebbar machen, indem wir einen Europa-Hub für politische und digitale Bildung schaffen."
                },
                {
                    logo: logos[3],
                    party: "Die Linke",
                    answer: "Von der Kita über Ausbildung bis zur Uni wollen wir Bildung kostenfrei anbieten. Bildung muss für alle offen sein und uns helfen, selbstbewusst zu handeln und zu denken. Das sind auch die zentralen Orte für politischen Bildung, weil hier alle erreicht werden. Deutschland muss mehr in Bildung investieren. Den Personalnotstand bei Erzieher*innen und Lehrer*innen wollen wir beseitigen. Auch außerhalb von Schule und Universität wollen wir für Jugendliche politische Bildung verbessern, insbesondere auch über online-Formate. Dafür muss es Experimentiermöglichkeiten geben. Hier sind junge Menschen die Expert*innen: sie wissen selbst am besten, wie sie Gleichaltrige über Netz und soziale Medien erreichen können. Jugendzentren und Freiräume in Städten wollen wir stärker fördern – auch da fi ndet politische Bildung statt."
                }
            ]
        },
        {
            question: "Was kann gegen die wachsende soziale Ungleichheit in Europa unternommen werden?",
            answers: [
                {
                    logo: logos[0],
                    party: "CDU",
                    answer: "Wir sind davon überzeugt, dass eine gut funktionierende Wirtschaft und ein solider Haushalt sozialer Ungleichheit am besten entgegenwirken. Wichtig ist, dass Menschen gute Arbeitsplätze haben. Wenn wir durch eine nachhaltige Wirtschaftspolitik und einen funktionierenden europäischen Binnenmarkt überall in der EU eine positive Wirtschaftsentwicklung haben, können die Mitgliedstaaten durch Steuereinnahmen und Sozialbeiträge ihren Sozialstaat mit sicherer Rente, gutem Gesundheitssystem und Hilfe für die Schwächsten fi nanzieren. Dagegen lehnen wir ab, die EU zu einer Schuldenunion zu machen. Denn dadurch verringert sich nicht die Ungleichheit, sondern es werden der jungen Generation Lasten auferlegt, ldie sie in Zukunft bezahlen müssen."
                },
                {
                    logo: logos[4],
                    party: "Bündnis 90 Die Grünen",
                    answer: "Soziale Ungleichheit erzeugt nicht nur Frust bei den Menschen - sie ist unfair und kostet der Gesellschaft richtig viel Geld. Wir setzen uns daher für soziale Mindeststandards ein. Alle EU-Bürger*innen sollen ein Recht darauf haben, durch die Sozialsysteme ihres Heimatlandes vor Armut geschützt zu werden. Bezahlbarer Wohnraum, gute Bildung und qualitative Krankenversorgung sind wichtige Elemente für eine gerechte Gesellschaft. Wir setzen uns dafür ein, dass alle ihren fairen Beitrag für die Finanzierung dieser Angebote leisten und kämpfen deshalb gegen Steuerhinterziehung und Steueroasen. Wir wollen dafür auch sehr hohe Vermögen und Milliardengewinne von Unternehmen heranziehen."
                },
                {
                    logo: logos[1],
                    party: "SPD",
                    answer: "Armut und Ungleichheit spalten Europa und schwächen den Zusammenhalt. Die Europäische Säule sozialer Rechte bleibt deshalb für uns handlungsleitend. Starke soziale Sicherungssysteme ermöglichen ein Leben in Würde. Wir wollen, dass es überall in der Europäischen Union solide Netze sozialer Sicherheit gibt. Deshalb setzen wir uns für Mindeststandards für die nationalen Grundsicherungssysteme ein, die eine angemessene, armutsfeste Einkommensunterstützung sowie Leistungen zur Eingliederung in den Arbeitsmarkt gewährleisten. Bis 2030 wollen wir in der EU fünf Millionen Kinder aus der Armut holen. Wir werden die nationale Umsetzung der Europäischen Kindergarantie begleiten und ausreichend EU-Mittel dafür zur Verfügung stellen. "
                },
                {
                    logo: logos[2],
                    party: "FDP",
                    answer: "Die EU muss eine gute Politik für eine starke Wirtschaft machen. Nur so können in Europa gute Jobs und soziale Aufstiegschancen entstehen. Hier ist in den letzten Jahren unter Kommissionspräsidentin Ursula von der Leyen (CDU) viel zu wenig passiert. Wir wollen die Wirtschaft ankurbeln, z. B. durch den Abbau von Bürokratie, durch mehr Freihandel und Technologieoffenheit in Zukunftsbereichen wie Künstlicher Intelligenz und Gentechnik. Sozialpolitik und Umverteilung sind dagegen Aufgabe der Mitgliedstaaten und wir wollen, dass das auch so bleibt. Die EU kann hier als länderübergreifende Organisation keine zielgenaue Politik machen, da die Ausgangssituation und die Problemlagen in den jeweiligen Mitgliedstaaten und Regionen viel zu unterschiedlich sind."
                },
                {
                    logo: logos[3],
                    party: "Die Linke",
                    answer: "Die Reichsten werden immer reicher. Aber jedes vierte Kind in der EU ist von Armut bedroht. Die großen Lebensmittel- und Energiekonzerne machen Rekordgewinne. Aber wir alle müssen mehr für Essen, Heizen und Strom zahlen. Das ist nicht gerecht. Krisen- und Spekulationsgewinne müssen besteuert werden, genauso wie das Vermögen der Superreichen. Wenn wir die europäischen Milliardäre gerecht besteuern, kann Armut in der EU abgeschafft werden. Wir können in öffentliche Infrastruktur investieren: den Nahverkehr ausbauen; in gute Bildung und Gesundheitsversorgung. Davon profi tieren alle. Wir wollen Niedriglöhnen einen Riegel vorschieben: Deshalb haben wir im Europaparlament die Mindestlohnrichtlinie mit durchgesetzt. Der Mindestlohn muss für Deutschland auf 15 EUR steigen, um Armut zu verhindern."
                }
            ]
        },
        {
            question: "Mit welcher Finanz- und Wirtschaftspolitik lassen sich die Klimaziele erreichen und welche grundlegenden Veränderungen werden Sie im Bereich Umweltpolitik umsetzen? Welche Verbote sind notwendig?",
            answers: [
                {
                    logo: logos[0],
                    party: "CDU",
                    answer: "Wir sehen Wirtschaft, Energie und Klimaschutz als Einheit. Ohne Klimaschutz kann unsere Wirtschaft nicht wettbewerbsfähig bleiben, ohne wettbewerbsfähige Wirtschaft kann es aber auch keinen nachhaltigen Klimaschutz geben. Klimaschutz gestalten wir mit den Menschen und Betrieben, nicht gegen sie. Wir wollen alle Branchen dabei unterstützen, ihre Produktionsweisen klimafreundlich zu gestalten. Wir setzen dabei auf Innovation und Forschung, auf Anreize und wirtschaftliche Instrumente, vor allem auf den Emissionshandel, der CO2 einen Preis gibt. Eine Verbotspolitik gegen die Menschen lehnen wir dagegen ab."
                },
                {
                    logo: logos[4],
                    party: "Bündnis 90 Die Grünen",
                    answer: "Nur eine klimaneutrale Wirtschaft kann unseren Wohlstand auch morgen sichern und gleichzeitig unsere Lebensgrundlagen erhalten. Dafür wollen wir die Weichen stellen. Ein Kernelement für diese Aufgabe ist die EUTaxonomie. Sie legt fest, welche Bedingungen erfüllt sein müssen, damit eine Investition „nachhaltig“ ist. Wir wollen die Umweltpolitik deutlich stärken und besonders dafür sorgen, dass wir die Natur wiederherstellen, um ihre wichtigen Funktionen für den Klimaschutz zu nutzen und die Biodiversität zu schützen. Dafür wollen wir Schadstoffe, etwa aus Dünger und Chemikalien, reduzieren und gleichzeitig neue Technologien und Materialien entwickeln, die im Einklang mit unseren Ökosystemen eingesetzt werden können."
                },
                {
                    logo: logos[1],
                    party: "SPD",
                    answer: "Um klimaneutral zu werden, brauchen wir europaweit sehr viel mehr erneuerbare Energien und die entsprechenden Netze dazu – vom Strom bis zum Wasserstoff, und zwar grenzüberschreitend. So können wir die Sonne in Spanien genauso nutzen wie die Erdwärme in Schweden. Auch die Landwirtschaft muss mit ins Boot und ihre Ziele deutlich mehr an Klimawirkung als nur an Preisen und Erträgen auszurichten. Wir brauchen kluge und klare Regeln für E-Autos – auch schlanke, günstige Modelle müssen her, nicht nur E-SUV. Und wir brauchen sehr viele Investitionen und sehr viele neue Ideen, in der und für die Wirtschaft in Europa."
                },
                {
                    logo: logos[2],
                    party: "FDP",
                    answer: "Wir setzen auf den europäischen Emissionshandel, um die Klimaziele zu erreichen. Der Emissionshandel ist für uns das wirksamste Mittel der Klimapolitik. Das bedeutet, dass es ein Limit von klimaschädlichen Emissionen gibt, die von Unternehmen ausgestoßen werden dürfen. Unternehmen können die Zertifi kate dafür kaufen und verkaufen. So werden Emissionen dort eingespart, wo das am günstigsten möglich ist. Die Menge der Zertifi kate wird per Gesetz stetig verringert, sodass die Klimaziele sicher erreicht werden. Dieses System wollen wir auf alle klimaschädlichen Bereiche und auch international ausweiten. Ein großer Vorteil: einzelne Technologien müssen nicht umständlich verboten werden! Das sorgt für weniger Papierkram und hält den Weg für Innovationen und verbesserte Technologien offen."
                },
                {
                    logo: logos[3],
                    party: "Die Linke",
                    answer: "Wir müssen die Klimakrise und die Naturzerstörung aufhalten. Das wollen wir sozial gerecht machen: CO2  Preise bringen nichts, solange es keine Alternativen gibt. Wir fordern kostenfreie Busse und Bahnen, überall mehr Verbindungen, mehr erneuerbare Energien. Nicht alle Einzelnen, sondern die ganze Gesellschaft muss verändert werden. Die Industrie muss klimafreundlich umgebaut werden und andere Dinge herstellen. Zum Beispiel weniger Autos und dafür mehr Straßenbahnen, Solarpaneele oder Krankenhausequipment. Unternehmen, die das machen, werden gefördert und die Beschäftigten können mit Umschulungen unterstützt werden. Den Luxuskonsum der Superreichen müssen wir stoppen: Privatjets und Luxusyachten wollen wir EU-weit verbieten."
                }
            ]
        }
    ]
    
    /*return [
        {
            question:"What is your name?",
            answers:[
                {logo:logos[0],party: "CDU",answer:"Answer CDU, but we are special so this answer must be extra long. The C in CDU stands for christian. The D in CDU stands for Democratic. And finally the U in CDU stands for Union. So that are we. The Christian Democratic Union"},
                {logo:logos[4],party:"Grünen",answer:"Answer Grünen"},
                {logo:logos[1],party:"SPD",answer:"Answer SPD"},
                {logo:logos[2],party:"FDP",answer:"Answer FDP"},
                {logo:logos[3],party:"Linken",answer:"Answer Linke"},
                //{logo:logos[5],party:"AfD",answer:"Answer AfD"},
            ],
        },
        {
            question:"What is your color?",
            answers:[
                {logo:logos[0],party: "CDU",answer:"Black"},
                {logo:logos[4],party:"Grünen",answer:"Green"},
                {logo:logos[1],party:"SPD",answer:"Red"},
                {logo:logos[2],party:"FDP",answer:"Yellow"},
                {logo:logos[3],party:"Linken",answer:"Pink"},
                //{logo:logos[5],party:"AfD",answer:"Blue"},
            ],
        },]*/
}

export function loadLogos(){

    return [
        {party:"CDU",logo:cduLogo},
        {party:"SPD",logo:spdLogo},
        {party:"FDP",logo:fdpLogo},
        {party:"Linken",logo:linkeLogo},
        {party:"Grünen",logo:grueneLogo},
        //{party:"AfD",logo:afdLogo}
    ]
}