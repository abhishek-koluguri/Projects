package game.ui;

        import game.MineSweeper;

        import javax.swing.*;
        import java.awt.*;

        import java.awt.event.MouseAdapter;
        import java.awt.event.MouseEvent;

public class MineSweeperBoard extends JFrame{

    MineSweeper mineSweeper;
    public MineSweeperCell[][] cellArray;


    @Override
    protected void frameInit(){

        super.frameInit();

        mineSweeper = mineSweeper.create();

        cellArray = new MineSweeperCell[mineSweeper.SIZE][mineSweeper.SIZE];

        setLayout(new GridLayout(10, 10));

        for (int i = 0; i < mineSweeper.SIZE ; i++) {
            for (int j = 0; j < mineSweeper.SIZE; j++) {

                MineSweeperCell cell = new MineSweeperCell(i, j);
                getContentPane().add(cell);

                cell.addMouseListener(new eventHandler());
                cellArray[i][j] = cell;
            }
        }
    }

    public static void main(String[] args) {

        createMineSweeperBoard();
    }

    public static void createMineSweeperBoard(){

        JFrame board = new MineSweeperBoard();
        board.setSize(600, 600);
        board.setVisible(true);
    }


    private class eventHandler extends MouseAdapter{

        @Override
        public void mouseClicked(MouseEvent mouseEvent) {

            MineSweeperCell cell = (MineSweeperCell) mouseEvent.getSource();

            if(SwingUtilities.isLeftMouseButton(mouseEvent))
            {

                mineSweeper.expose(cell.row, cell.column);

                if (mineSweeper.isMine(cell.row, cell.column) && mineSweeper.cellStatus(cell.row, cell.column) != MineSweeper.Status.SEALED)
                {
                    displayMines();
                }
                display();
            }

            else if(SwingUtilities.isRightMouseButton(mouseEvent) || mouseEvent.isControlDown())
            {
                if(mineSweeper.cellStatus(cell.row, cell.column) == MineSweeper.Status.UNEXPOSED) {

                    mineSweeper.seal(cell.row, cell.column);

                    cell.setText("S");
                    cell.setForeground(Color.RED);
                }
                else if (mineSweeper.cellStatus(cell.row, cell.column)== MineSweeper.Status.SEALED ){

                    mineSweeper.unSeal(cell.row, cell.column);

                    cell.setText("");
                }
            }

            if (mineSweeper.gameStatus() == MineSweeper.GameStatus.WON) {

                JOptionPane.showMessageDialog(cell, "YOU WON...!!! :)\n Click OK to play again");
                createMineSweeperBoard();

            } else if (mineSweeper.gameStatus() == MineSweeper.GameStatus.LOST) {

                JOptionPane.showMessageDialog(cell, "YOU LOST... :(\n Click OK to play again");
                createMineSweeperBoard();
            }
        }
    }

    public void display(){

        for (int i=0;i<10;i++) {
            for (int j=0;j<10;j++) {

                MineSweeperCell newCell = cellArray[i][j];

                if (!mineSweeper.mines[i][j] && mineSweeper.cellStatus(i, j) == MineSweeper.Status.EXPOSED) {

                    int count = mineSweeper.countAdjacentMines(i, j);

                    if (count>0) {

                        newCell.setText(Integer.toString(count));
                    }

                    newCell.setForeground(Color.blue);
                    newCell.setBackground(Color.white);
                }
            }
        }
    }

    public void displayMines(){

        for (int i = 0; i < 10; i++) {
            for (int j = 0; j < 10; j++) {

                MineSweeperCell newCell = cellArray[i][j];
                if (mineSweeper.mines[i][j]) {

                    newCell.setForeground(Color.RED);
                    newCell.setBackground(Color.white);

					newCell.setText("M");
                }
            }
        }
    }
}