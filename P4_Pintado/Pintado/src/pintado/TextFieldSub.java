/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package pintado;

import java.awt.Color;
import java.awt.Graphics;

/**
 *
 * @author pelay
 */
public class TextFieldSub extends javax.swing.JTextField{
    public void paint (Graphics g){
        super.paint(g);
        int y=(int)(getHeight()*0.8); //80/10=0.8
        int lc=this.getText().length(); //longitud cadena
        if (lc>10) lc=10; //hasta 10
        int lon=(getWidth()-3)*lc/10; //proporcional al ancho y -4 para ajustar
        if (lc<5) g.setColor(Color.RED);
        else if (lc<10) g.setColor(Color.YELLOW);
        else g.setColor(Color.GREEN);
        g.drawLine(0+3, y, lon, y); //+2 para ajustar
    }
}
